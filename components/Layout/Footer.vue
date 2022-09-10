<template>
  <div>
    <br />
    <hr />
    <!-- Footer -->
    <footer
      class="py-5 bg-dark"
      style="padding-top: 1rem !important; padding-bottom: 2rem !important"
    >
      <div class="container">
        <p
          class="m-0 text-center"
          style="font-size: calc(3px + 0.55rem + 0.35vw)"
        >
          Copyright &copy;
          <a :href="'https://polinetwork.org/' + $i18n.locale">PoliNetwork</a>
        </p>
        <p
          class="m-0 text-center"
          style="
            font-size: calc(3px + 0.3rem + 0.2vw);
            color: #000000d9;
            padding-top: 10px;
          "
        >
          <span
            ><a
              style="color: inherit"
              href="https://polinetwork.org/it/learnmore/official/"
              >{{
                $t("Questo sito non è affiliato al Politecnico di Milano")
              }}</a
            ></span
          >
        </p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>


